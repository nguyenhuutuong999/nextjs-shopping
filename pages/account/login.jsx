import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import Head from 'next/head';

function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;


    async function onSubmit({ username, password }) {
        const result = await signIn("credentials", {
            username: username,
            password: password,
            redirect: true,
            callbackUrl: "/"
        })
    }

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="some description here" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />
            </Head>
            <section class="vh-100 d-flex flex-column text-center text-md-start justify-content-between">
                <div class="container-fluid h-custom" style={{ paddingTop: "150px" }}>
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="img-fluid" alt="Sample image" />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                            <div class="d-flex flex-row align-items-center justify-content-center">
                                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-twitter"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-linkedin-in"></i>
                                </button>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="divider d-flex align-items-center justify-content-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>
                                <div className="form-group text-left">
                                    <label>Username</label>
                                    <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.username?.message}</div>
                                </div>
                                <div className="form-group text-left">
                                    <label>Password</label>
                                    <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.password?.message}</div>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2 text-left" type="checkbox" value="" id="form2Example3" />
                                        <label class="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" class="text-body">Forgot password?</a>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button disabled={formState.isSubmitting} class="btn btn-primary btn-lg"
                                        style={{ padding: " 0 2.5rem" }}
                                    >
                                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>} Login</button>
                                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        class="link-danger">Register</a></p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div
                    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div class="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>

                    <div>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#!" class="text-white">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
