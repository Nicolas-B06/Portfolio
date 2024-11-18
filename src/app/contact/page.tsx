"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { t } = useLanguage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          console.log("Message envoyé !", result.text);
          alert(t("contactSuccess"));
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Erreur lors de l'envoi", error.text);
          alert(t("contactError"));
        }
      );
  };

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 mt-20">
      {t("contactPageTitle")}
      </h2>
      <p className="text-center text-lg text-gray-300 mb-8">
      {t("contactPageSubtitle")}
      </p>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-6xl space-y-8 lg:space-y-0 lg:space-x-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-[var(--card)] p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t("formName")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[var(--input)] text-[var(--foreground)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
            {t("formEmail")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[var(--input)] text-[var(--foreground)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
            {t("formSubject")}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-[var(--input)] text-[var(--foreground)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
            {t("formMessage")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 bg-[var(--input)] text-[var(--foreground)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--accent)] text-[var(--accent-foreground)] py-3 rounded font-semibold hover:bg-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-200"
          >
            {t("formSubmit")}
          </button>
        </form>
        <div className="w-full lg:w-1/3 flex flex-col items-start space-y-6 p-8 bg-[var(--card)] rounded-lg shadow-lg self-start">
          <h3 className="text-2xl font-semibold mb-4">{t("contactInfoTitle")}</h3>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-[var(--accent)] text-xl" />
            <a
              href="mailto:nicolasbernard06600@gmail.com"
              className="text-lg hover:text-[var(--accent)] hover:underline"
            >
              nicolasbernard06600@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-[var(--accent)] text-xl" />
            <a
              href="https://www.linkedin.com/in/bernard-nicolas-06600/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[var(--accent)] hover:underline"
            >
              https://www.linkedin.com/in/bernard-nicolas-06600/
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="text-[var(--accent)] text-xl" />
            <a
              href="https://github.com/Nicolas-B06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[var(--accent)] hover:underline"
            >
              https://github.com/Nicolas-B06
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
