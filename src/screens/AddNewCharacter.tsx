import React from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';

interface AddNewCharacterProps {}

export const AddNewCharacter: React.FC<AddNewCharacterProps> = ({}) => {
  const jobTitleNumberRef = React.createRef<TextInput>();
  const aboutRef = React.createRef<TextInput>();
  const imageLink = React.createRef<TextInput>();

  const navigation = useNavigation<any>();

  const onAddNewCharacter = () => {};
  return (
    <View style={styles.mainWrapper}>
      <Formik
        initialValues={{
          name: '',
          job: '',
          description: '',
          avatar: '',
        }}
        onSubmit={onAddNewCharacter}
        validationSchema={yup.object().shape({
          name: yup.string().required('Gerekli'),
          job: yup.string().required('Gerekli'),
          description: yup.string().required('Gerekli'),
        })}>
        {({
          values,
          errors,
          setFieldTouched,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <View>
            <View>
              <Text style={styles.customText}>Name Surname:</Text>
              <TextInput
                value={values.name}
                onSubmitEditing={() => jobTitleNumberRef.current?.focus()}
                style={[
                  touched.name && errors.name
                    ? [styles.customCss, {borderColor: 'red'}]
                    : styles.customCss,
                ]}
                placeholder="Name Surname"
                onBlur={() => setFieldTouched('name')}
                onChangeText={handleChange('name')}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
            </View>
            <View>
              <Text style={styles.customText}>Job Title</Text>

              <TextInput
                value={values.job}
                ref={jobTitleNumberRef as any}
                onSubmitEditing={() => aboutRef.current?.focus()}
                style={[
                  touched.job && errors.job
                    ? [styles.customCss, {borderColor: 'red'}]
                    : styles.customCss,
                ]}
                onBlur={() => setFieldTouched('job')}
                onChangeText={handleChange('job')}
                placeholder="Job Title"
              />
              {touched.job && errors.job && (
                <Text style={styles.errorText}>{errors.job}</Text>
              )}
            </View>
            <View>
              <Text style={styles.customText}>About Him/Her:</Text>

              <TextInput
                ref={aboutRef as any}
                onSubmitEditing={() => imageLink.current?.focus()}
                value={values.description}
                style={[
                  touched.description && errors.description
                    ? [styles.customRichCss, {borderColor: 'red'}]
                    : styles.customRichCss,
                ]}
                onBlur={() => setFieldTouched('description')}
                onChangeText={handleChange('description')}
                placeholder="About Him/Her"
              />
              {touched.description && errors.description && (
                <Text style={styles.errorText}>{errors.description}</Text>
              )}
            </View>
            <View>
              <Text style={styles.customText}>Image Link:</Text>

              <TextInput
                value={values.avatar}
                ref={imageLink as any}
                style={[
                  touched.avatar && errors.avatar
                    ? [styles.customCss, {borderColor: 'red'}]
                    : styles.customCss,
                ]}
                onBlur={() => setFieldTouched('avatar')}
                onChangeText={handleChange('avatar')}
                placeholder="Image Link"
                onSubmitEditing={handleSubmit}
              />
              {touched.avatar && errors.avatar && (
                <Text style={styles.errorText}>{errors.avatar}</Text>
              )}
            </View>
            <Pressable onPress={handleSubmit} style={styles.buttonStyle}>
              <Text>Add New Character</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export const styles = StyleSheet.create({
  mainWrapper: {
    borderColor: 'gray',
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 1000,
  },
  buttonStyle: {
    aspectRatio: 7,
    width: 380,
    backgroundColor: '#26653A',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    top: 30,
  },
  customCss: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor: 'gray',
  },
  customRichCss: {
    borderRadius: 8,
    height: 100,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor: 'gray',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  customText: {
    fontWeight: 'bold',
    paddingVertical: 8,
    letterSpacing: 1,
    color: 'black',
  },
  staticText: {
    color: '#26653A',
    fontSize: 16,
    letterSpacing: 1,
  },
});
