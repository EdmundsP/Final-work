<?php
$page_title = 'Daiga Paintings | Original Art & Prints';
$page_description = 'Original paintings and canvas prints by Latvian artist Daiga. Browse the gallery and shop online.';
include 'includes/head.php';
include 'includes/nav.php';
?>
<main>
    <div class="center__no_mr">
        <img class="opening_view" src="./images/img_template.jpg" alt="Daiga Paintings">
    </div>
    <section class="gallery">
        <div class="center">
            <h1>Gallery</h1>
        </div>
        <div class="img_container"></div>
    </section>
    <section>
        <div class="center">
            <a class="btn_accent" href="./shop.php">shop now</a>
        </div>
        <div class="sign_up_cont">
            <h2>sign up now</h2>
            <p class="p_update">Subscribe to my newsletter to never miss an update!</p>
            <form id="SubscribersSubmitHandler" class="input_mail_cont" action="api.php?name=subscribers" method="post">
                <input class="input_mail" type="email" name="email" id="subscription_email" placeholder="Enter your email" required>
                <button type="submit" class="btn_accent btn_mr">subscribe</button>
            </form>
        </div>
    </section>
</main>
<?php include 'includes/footer.php'; ?>
