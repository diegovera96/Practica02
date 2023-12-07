import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { REACT_APP_API_PATH } from "@env";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    //.required("Please enter a registered email"),
 /* password: Yup.string()
    .label("Password")
    .required()
    .min(6, "Password must have at least 6 characters "),*/
});

const ErrorMessage = ({ errorValue }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
);

export default function App() {
  const [profile, setProfile] = useState({});
  const [frameworks, setFrameworks] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const ipPublic = REACT_APP_API_PATH;

  useEffect(() => {
    try {
      console.log(ipPublic);
      const getProfile = async () => {
        const response = await axios.get(REACT_APP_API_PATH).then(response => {
          setProfile(response.data.profile);
          setFrameworks(response.data.framework);
          setHobbies(response.data.hobby);
        })
        .catch(error => console.log(error));
      }
      getProfile();
    } catch (error) { 
      console.error(error);
    }
  }, []);

  useEffect(() => {
    setProfile(profile);
  }, [profile]);

  useEffect(() => {
    setFrameworks(frameworks);
  }, [frameworks]);

  useEffect(() => {
    setHobbies(hobbies);
  }, [hobbies]);
  
  const updatePortfolio = async (values) => {
    const response = await axios.put(`${REACT_APP_API_PATH}/1`, values);
  }

  function onLoginHandler(values) {
    const { email, password } = values;

    alert(`Credentials entered. email: ${email}, password: ${password}`);
  }

  const handleSingleSubmit = (values, type) => {
    const allValues = { ...values, type };
    //console.log(allValues);
    updatePortfolio(allValues);
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Perfil</Text>
      <Formik
        enableReinitialize = {true}
        initialValues={profile}
        onSubmit={(values, actions) => {
          //updateProfile(values);
          //onLoginHandler(values, actions);
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
        }) => (
          <>
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={values.name ? values.name : ''}
              onChangeText={handleChange("name")}
              autoCapitalize="none"
              onBlur={handleBlur("name")}
            />
            <ErrorMessage errorValue={touched.name && errors.name} />
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={values.lastname ? values.lastname : ''}
              onChangeText={handleChange("lastname")}
              autoCapitalize="none"
              onBlur={handleBlur("lastname")}
            />
            <ErrorMessage errorValue={touched.lastname && errors.lastname} />
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={values.email ? values.email : ''}
              onChangeText={handleChange("email")}
              autoCapitalize="none"
              autoCompleteType="email"
              onBlur={handleBlur("email")}
            />
            <ErrorMessage errorValue={touched.email && errors.email} />
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={values.country ? values.country : ''}
              onChangeText={handleChange("country")}
              autoCapitalize="none"
              onBlur={handleBlur("country")}
            />
            <ErrorMessage errorValue={touched.country && errors.country} />
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={values.city ? values.city : ''}
              onChangeText={handleChange("city")}
              autoCapitalize="none"
              onBlur={handleBlur("city")}
            />
            <ErrorMessage errorValue={touched.city && errors.city} />
            <TextInput
              style={styles.largeInput}
              value={values.summary ? values.summary : ''}
              onChangeText={handleChange("summary")}
              autoCapitalize="none"
              onBlur={handleBlur("summary")}
              multiline={true}
            />
            <ErrorMessage errorValue={touched.summary && errors.summary} />
            <TouchableOpacity
            onPress={() => handleSingleSubmit(values, 'profile')}
            style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Actualizar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Frameworks</Text>
      <Formik
        enableReinitialize={true}
        initialValues={frameworks.reduce((prev, curr, index) => ({ ...prev, [`framework${index}`]: curr }), {})}
        onSubmit={(values, actions) => {
          //updateProfile(values);
        }}
      >
        {({ 
          handleChange,
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
        }) => (
          <>
            {frameworks.map((framework, index) => (
              <React.Fragment key={`framework-${framework.id}`}>
                <SafeAreaView style={[styles.safeContainer]}>
                  <TextInput
                    style={styles.input}
                    numberOfLines={1}
                    onChangeText={handleChange(`framework${index}.name`)}
                    onBlur={handleBlur(`framework${index}.name`)}
                    value={values[`framework${index}`] ? values[`framework${index}`].name : ''}
                  />
                  <TextInput
                    style={styles.input}
                    numberOfLines={1}
                    onChangeText={handleChange(`framework${index}.level`)}
                    onBlur={handleBlur(`framework${index}.level`)}
                    value={values[`framework${index}`] ? values[`framework${index}`].level : ''}
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange(`framework${index}.year`)}
                    onBlur={handleBlur(`framework${index}.year`)}
                    value={values[`framework${index}`] ? values[`framework${index}`].year : ''}
                  />
                  <TouchableOpacity
                  onPress={() => handleSingleSubmit(values[`framework${index}`], 'framework')}
                  style={styles.buttonContainer}
                  >
                    <Text style={styles.buttonText}>Actualizar</Text>
                  </TouchableOpacity>
                </SafeAreaView>
              </React.Fragment>
            ))}

          </>
        )}
      </Formik>

      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Hobbies</Text>
      <Formik
        enableReinitialize={true}
        initialValues={hobbies.reduce((prev, curr, index) => ({ ...prev, [`hobby${index}`]: curr }), {})}
        onSubmit={(values, actions) => {
          //updateHobbies(values);
        }}
      >
        {({ 
          handleChange,
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
        }) => (
          <>
            {hobbies.map((hobby, index) => (
              <React.Fragment key={`hobby-${hobby.id}`}>
                <SafeAreaView style={[styles.safeContainer]}>
                  <TextInput
                    key={`name-${hobby.id}`}
                    style={styles.input}
                    onChangeText={handleChange(`hobby${index}.name`)}
                    onBlur={handleBlur(`hobby${index}.name`)}
                    value={values[`hobby${index}`] ? values[`hobby${index}`].name : ''}
                  />
                  <TextInput
                    key={`description-${hobby.id}`}
                    style={styles.largeInput}
                    onChangeText={handleChange(`hobby${index}.description`)}
                    onBlur={handleBlur(`hobby${index}.description`)}
                    value={values[`hobby${index}`] ? values[`hobby${index}`].description : ''}
                    multiline={true}
                  />
                  <TouchableOpacity
                    onPress={() => handleSingleSubmit(values[`hobby${index}`], 'hobby')}
                    style={styles.buttonContainer}
                    >
                      <Text style={styles.buttonText}>Actualizar</Text>
                  </TouchableOpacity>
                </SafeAreaView>
              </React.Fragment>   
            ))}
          </>
        )}
      </Formik>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#f0ffff',
  },
  safeContainer: {
    flex: 1,
    marginBottom: 10,
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    backgroundColor: '#f0f8ff',
  },
  input: {
    marginVertical: 10,
    width: '90%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  largeInput: {
    marginVertical: 10,
    width: '90%',
    height: 100,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: '80%',
    height: 44,
    borderRadius: 5,
    backgroundColor: "#343434",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
  },
});
