import React from 'react';

const ContactArea = () => {
   return (
      <>
         <section className="contact__area">
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-xl-12">
                     <div className="contact__map">
                        <iframe title='contact' src="https://maps.google.com/maps?hl=en&amp;q=Stanford+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe>
                        <div className="contact__wrapper d-md-flex justify-content-between wow fadeInUp" data-wow-delay=".3s">
                           <div className="contact__info mr-100">
                              <h3>Get in touch</h3>
                              <ul>
                                 <li>
                                    <h4>Address</h4>
                                    <p>473 Via Ortega <br /> Stanford, CA 94305</p>
                                 </li>
                                 {/* <li>
                                    <h4>call us</h4>
                                    <p><a href="tel:(650) 862 4566">(650) 862 4566</a></p>
                                    <p><a href="tel:(204)-234-674">(204) 234 674</a></p>
                                 </li> */}
                                 <li>
                                    <h4>Email Address</h4>
                                    <p><a href="//deepsolar.stanford@gmail.com">deepsolar.stanford@gmail.com</a></p>
                                 </li>
                              </ul>
                           </div>
                           {/* <div className="contact__form">
                              <form >
                                 <input type="text" required placeholder="Your Name" />
                                 <input type="email" required placeholder="Your Email" />
                                 <textarea required placeholder="Your Message"></textarea>
                                 <button type="submit" className="z-btn">Send Message</button>
                              </form>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactArea;