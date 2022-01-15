
import {
    Flex,
    Box,

    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormErrorMessage,
} from '@chakra-ui/react';

import { Link as RouterLink } from "react-router-dom";
import { Formik, Form, Field } from 'formik';

export default function LoginScreen() {
    function handleSubmit(values: any, { setSubmitting }: any) {
        console.log('values', values)
        setSubmitting(false)
    }
    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        width={'md'}
                        p={8}>
                        <Stack spacing={4}>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                onSubmit={handleSubmit}
                            >
                                {(props) => (
                                    <>
                                        <Form>
                                            <Field name='email' >
                                                {({ field, form }: any) => (

                                                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                                        <Input {...field} id='email' type='email' placeholder='email' />
                                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name='password' >
                                                {({ field, form }: any) => (

                                                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                                        <Input {...field} id='password' type='password' placeholder='password' />
                                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>


                                            <Stack spacing={10}>
                                                <Stack
                                                    direction={{ base: 'column', sm: 'row' }}
                                                    align={'start'}
                                                    justify={'space-between'}>
                                                    <Checkbox>Remember me</Checkbox>

                                                    <RouterLink to='/recover'>
                                                        Forgot password?
                                                    </RouterLink>

                                                </Stack>
                                                <Button
                                                    disabled={props.isSubmitting}
                                                    type='submit'
                                                    colorScheme={'blue'}
                                                >
                                                    Sign in
                                                </Button>
                                            </Stack>
                                        </Form>

                                    </>
                                )}
                            </Formik>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Not a user? <RouterLink to='signup'>Register</RouterLink>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>

    );
}


// const Basic = () => (
//   <div>
//     <h1>Anywhere in your app!</h1>

//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.email && touched.email && errors.email}
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {errors.password && touched.password && errors.password}
//           <button type="submit" >
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );

// export default Basic;