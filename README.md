# Jackson Gitahi's Personal Portfolio

This repository contains the source code for my personal portfolio website. It is a clean, responsive, multi-page static site built with HTML and CSS to showcase my skills, projects, and professional experience as an ICT Professional and Junior Developer.

### [View Live Demo](https://jackmarley254.github.io/My-Portfolio/)

---

## 📸 Screenshot


![Portfolio Homepage Screenshot](static/images/screenshot.png)

---

## ✨ Features

* **7-Page Structure:** Includes Home, About, Skills, Projects, Services, Resume, and Contact.
* **Fully Responsive Design:** Adapts seamlessly to all screen sizes, from small mobile phones to large desktops, using CSS Media Queries.
* **Modern Dark Theme:** A professional design based on a dark grey, white, and red accent color scheme.
* **Functional Contact Form:** Integrated with **[Formspree](https://formspree.io/f/xgvrwolw)** to receive email submissions directly from the site without requiring a backend.
* **Optimized Assets:** Clean and well-commented HTML and CSS.

---

## 💻 Technologies Used

* **HTML5:** For the core structure and content.
* **CSS3:** For all styling, layout (Flexbox/Grid), and responsiveness (Media Queries).
* **[Formspree](https://formspree.io):** For the contact form service.
* **[Font Awesome](https://fontawesome.com):** For social media icons in the footer.

---

## 📂 Project Structure

Here is the file structure for the project:
portfolio-website/ ├── index.html (Home page) ├── about.html (About page) ├── skills.html (Skills page) ├── projects.html (Projects page) ├── services.html (Services page) ├── resume.html (Resume page) ├── contact.html (Contact page) ├── style.css (Main stylesheet) ├── README.md (This file) └── static/ ├── images/ │ └── myherosectionimage.jpg (Your profile photo) │ └── screenshot.png (Your site screenshot) └── media/ └── jackson-gitahi-cv.pdf (Your resume/CV file)

## 🚀 Setup and Customization

To get this site running for your own use, follow these steps:

1.  **Clone the Repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Add Your Content:**
    * **Profile Image:** Replace `static/images/myherosectionimage.jpg` with your own photo.
    * **Resume:** Add your CV in PDF format to the `static/documents/` folder.
    * **Update Resume Link:** In **`resume.html`**, find this line:
        ```html
        <a href="your-cv.pdf" class="cta-button" target="_blank">Download Full CV</a>
        ```
        And update the `href` to point to your new file:
        ```html
        <a href="static/documents/jackson-gitahi-cv.pdf" class="cta-button" target="_blank">Download Full CV</a>
        ```

3.  **Activate the Contact Form:**
    * Go to [formspree.io](https://formspree.io) and create a new form.
    * Copy your unique Formspree URL.
    * In **`contact.html`**, find this line:
        ```html
        <form class="contact-form" action="[https://formspree.io/f/YOUR_UNIQUE_ID](https://formspree.io/f/YOUR_UNIQUE_ID)" method="POST">
        ```
    * Replace `https://formspree.io/f/YOUR_UNIQUE_ID` with your own URL.

4.  **Update Social Media Links:**
    * In the `<footer>` section of **all HTML files**, find the social icons.
    * Replace the placeholder `"#"` in each `<a>` tag with your actual social media profile links (LinkedIn, GitHub, etc.).
    ```html
    <a href="[https://www.linkedin.com/in/your-profile](https://www.linkedin.com/in/your-profile)" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
    <a href="[https://github.com/your-username](https://github.com/your-username)" target="_blank"><i class="fa-brands fa-github"></i></a>
    ```

5.  **Edit Personal Information:**
    * Go through each HTML file (`about.html`, `skills.html`, `projects.html`) and update the text content to reflect your personal details, experience, and projects.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.