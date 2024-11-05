"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      .then(
        (result) => {
          console.log("Message envoyé !", result.text);
          alert("Votre message a été envoyé avec succès !");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Erreur lors de l'envoi", error.text);
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      );
  };

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Entrons en Contact</h2>
      <p className="text-center text-lg text-gray-300 mb-8">
        Pour toute question, collaboration ou simplement pour échanger, n&apos;hésitez pas à remplir le formulaire ci-dessous !
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-[var(--card)] p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
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
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
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
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet</label>
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
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
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
          className="w-full bg-[var(--accent)] text-[var(--accent-foreground)] py-3 rounded font-semibold hover:bg-[var(--primary)] transition-colors duration-200"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
