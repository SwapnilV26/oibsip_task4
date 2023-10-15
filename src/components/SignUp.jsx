import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  // const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);

    // if(name.length < 3){
    //     toast.error("Name must contain atleast 3 characters!");
    //     return;
    // } else if(password.length < 6){
    //     toast.error("Password must contain atleast 6 characters!");
    //     return;
    // }

    // try {
    //     //create user
    //     const res = await createUserWithEmailAndPassword(auth, email, password);

    //     if(file){
    //         const storageRef = ref(storage, name);
    //         uploadBytesResumable(storageRef, file).then(()=>{
    //             getDownloadURL(storageRef).then(async (downloadURL) => {
    //                 await updateProfile(res.user, {
    //                     displayName: name,
    //                     photoURL: downloadURL
    //                 });
    //                 await setDoc(doc(db, "users", res.user.uid), {
    //                     uid: res.user.uid,
    //                     displayName: name.toLocaleLowerCase(),
    //                     email,
    //                     photoURL: downloadURL,
    //                 })
    //             });
    //         });
    //         toast.success("Registed Successfully");
    //     } else {
    //         await updateProfile(res.user, {
    //             displayName: name
    //         });
    //         await setDoc(doc(db, "users", res.user.uid), {
    //             uid: res.user.uid,
    //             displayName: name.toLocaleLowerCase(),
    //             email
    //         })
    //         toast.success("Registed Successfully");
    //     }

    //     //create empty user chats on firestore
    //     await setDoc(doc(db, "userChats", res.user.uid), {});

    //     //make form empty
    //     setName("");
    //     setEmail("");
    //     setPassword("");
    //     setFile(null);

    //     navigate("/");

    //     console.log(res.user)
    // } catch (error) {
    //     console.error("Error getting download URL:", error);
    //     toast.error("User already exist");
    // }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url(./assets/bg-img.jpg)] bg-cover bg-no-repeat">
      <div className="py-6 px-8 bg-white rounded-md m-2 lg:w-[30%]">
        <div className="flex flex-col justify-center items-center">
          <span className="text-center font-semibold mb-5 mt-2 text-3xl text-indigo-500 underline tracking-tighter">
            Register here
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-base font-medium text-gray-900"
            >
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-base font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-base font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              placeholder="Enter password here..."
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full my-4 text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-base px-5 py-2 text-center"
          >
            Create an account
          </button>
          <hr />
          <p className="text-base text-center font-normal text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-500 hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
