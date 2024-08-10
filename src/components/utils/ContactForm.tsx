import { FaArrowAltCircleRight } from "react-icons/fa";
import Input from "./Input";
import TextArea from "./TextArea";
import { FormEvent } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your message has been sent!", {
          position: "bottom-right",
        });
        form.reset();
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch (error) {
      toast.error("Network error, please try again later.");
    } finally {
    }
  }

  return (
    <div className="w-full md:w-[70%] flex flex-col justify-center items-start">
      <h1 className="text-xl text-white font-medium md:text-3xl md:my-4">
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-2 w-full flex flex-col justify-center items-start gap-3 md:max-w-[500px]"
      >
        <label className="text-gray-400 font-medium">Name</label>
        <Input name="name" type="text" placeholder="name" />
        <label className="text-gray-400 font-medium">Email</label>
        <Input name="email" type="email" placeholder="email" />
        <label className="text-gray-400 font-medium">Message</label>
        <TextArea name="message" />
        <button
          type="submit"
          className="px-6 py-2 mt-3 flex justify-center items-center gap-1 bg-indigo-950 text-white font-medium rounded-lg hover:bg-indigo-900 duration-300"
        >
          Send
          <FaArrowAltCircleRight />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
