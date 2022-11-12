import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <main className="">
        <InputPage></InputPage>
      </main>
    </>
  );
};

const InputPage = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url("https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/gilman_quad0508.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center text-neutral-content lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">Welcome to the personalized mailing list.</p>
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input-bordered input"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
                type="text"
                placeholder="Phone number"
                className="input-bordered input"
              />
              <label className="label">
                <Link
                  href="passwordRecovery"
                  className="link-hover label-text-alt link"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <Link href="preferences">
                <button className="btn-primary btn">Sign up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
