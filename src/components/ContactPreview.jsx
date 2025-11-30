import React from 'react'
export default function ContactPreview(){
  return (
    <section className="mt-8 " data-aos="fade-up">
      <h2 className="text-xl font-bold text-primary mb-4">Contact Us</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg">
        <input name="name" placeholder="Name" className="p-2 border rounded bg-transparent"/>
        <input name="email" placeholder="Email" className="p-2 border rounded bg-transparent"/>
        <textarea name="message" placeholder="Message" className="p-2 border rounded bg-transparent md:col-span-2"></textarea>
        <button className="bg-primary text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  )
}
