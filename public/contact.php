<?php
$page_title = 'Contact | Daiga Paintings';
$page_description = 'Get in touch with Daiga. Ask questions, inquire about commissions, or request a custom painting.';
include 'includes/head.php';
include 'includes/nav.php';
?>
<section>
    <div class="center">
        <h1>contact</h1>
    </div>
    <div class="describe">
        <p class="p_update">
            Hi! Feel free to reach out to ask any questions or inquire about commissions. We will reply within 1–3 business days. Thank you!
        </p>
    </div>
    <div class="input_cont">
        <form id="ContactSubmitHandler" action="api.php?name=contact" method="post">
            <div class="name_mail">
                <div class="input_name">
                    <label class="input_lable" for="subscription_name">name</label>
                    <input class="input_area" type="text" id="subscription_name" name="name" required>
                </div>
                <div class="input_email">
                    <label class="input_lable" for="subscription_email">email</label>
                    <input class="input_area" type="email" id="subscription_email" name="email" required>
                </div>
            </div>
            <div>
                <label class="input_lable" for="input_message">message</label>
                <textarea class="input_message" name="message" rows="10" id="input_message" required></textarea>
            </div>
            <div class="center_simpel form_check">
                <div>
                    <input type="checkbox" class="form-check-input" id="subscription_check">
                    <label class="form-check-label" for="subscription_check">I agree with the Privacy Policy</label>
                </div>
                <p class="p_alert" id="alert"></p>
            </div>
            <div class="center_simpel">
                <button type="submit" class="btn_accent send">send</button>
            </div>
        </form>
        <p id="contact_success" class="p_update center_simpel" style="display:none; color: green; margin-top: 1rem;">
            Message sent! We'll be in touch soon.
        </p>
        <div class="center_simpel" style="margin-top: 2rem;">
            <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Follow on Instagram">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
                    <path d="M256 46.1c68.4 0 76.5 0.3 103.4 1.5 25 1.1 38.5 5.3 47.5 8.8 11.9 4.6 20.5 10.2 29.4 19.1 9 9 14.5 17.5 19.2 29.4 3.5 9 7.7 22.6 8.8 47.5 1.2 27 1.5 35.1 1.5 103.4s-0.3 76.5-1.5 103.4c-1.1 25-5.3 38.5-8.8 47.5-4.6 11.9-10.2 20.5-19.1 29.4-9 9-17.5 14.5-29.4 19.2-9 3.5-22.6 7.7-47.5 8.8-27 1.2-35.1 1.5-103.4 1.5s-76.5-0.3-103.4-1.5c-25-1.1-38.5-5.3-47.5-8.8-11.9-4.6-20.5-10.2-29.4-19.1-9-9-14.5-17.5-19.2-29.4-3.5-9-7.7-22.6-8.8-47.5-1.2-27-1.5-35.1-1.5-103.4s0.3-76.5 1.5-103.4c1.1-25 5.3-38.5 8.8-47.5 4.6-11.9 10.2-20.5 19.1-29.4 9-9 17.5-14.5 29.4-19.2 9-3.5 22.6-7.7 47.5-8.8 26.9-1.2 35-1.5 103.4-1.5zM256 0c-69.5 0-78.2 0.3-105.5 1.5-27.2 1.2-45.9 5.6-62.1 11.9-16.9 6.6-31.2 15.3-45.4 29.6-14.3 14.2-23 28.5-29.6 45.3-6.3 16.3-10.7 34.9-11.9 62.1-1.2 27.4-1.5 36.1-1.5 105.6s0.3 78.2 1.5 105.5c1.2 27.2 5.6 45.9 11.9 62.1 6.6 16.9 15.3 31.2 29.6 45.4 14.2 14.2 28.5 23 45.3 29.5 16.3 6.3 34.9 10.7 62.1 11.9 27.3 1.2 36 1.5 105.5 1.5s78.2-0.3 105.5-1.5c27.2-1.2 45.9-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.3-29.5s23-28.5 29.5-45.3c6.3-16.3 10.7-34.9 11.9-62.1 1.2-27.3 1.5-36 1.5-105.5s-0.3-78.2-1.5-105.5c-1.2-27.2-5.6-45.9-11.9-62.1-6.3-17-15-31.3-29.3-45.5-14.2-14.2-28.5-23-45.3-29.5-16.3-6.3-34.9-10.7-62.1-11.9-27.4-1.3-36.1-1.6-105.6-1.6v0z"></path>
                    <path d="M256 124.5c-72.6 0-131.5 58.9-131.5 131.5s58.9 131.5 131.5 131.5 131.5-58.9 131.5-131.5c0-72.6-58.9-131.5-131.5-131.5zM256 341.3c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3c47.1 0 85.3 38.2 85.3 85.3s-38.2 85.3-85.3 85.3z"></path>
                    <path d="M423.4 119.3c0 16.955-13.745 30.7-30.7 30.7s-30.7-13.745-30.7-30.7c0-16.955 13.745-30.7 30.7-30.7s30.7 13.745 30.7 30.7z"></path>
                </svg>
            </a>
        </div>
    </div>
</section>
<?php include 'includes/footer.php'; ?>
