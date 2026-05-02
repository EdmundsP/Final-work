<?php
$page_title = 'Artwork | Daiga Paintings';
$page_description = 'View artwork by Latvian artist Daiga.';
include 'includes/head.php';
include 'includes/nav.php';
?>
<section class="product_page">
    <div class="center" style="margin-bottom: 1rem;">
        <a href="javascript:history.back()" class="btn_nav">&larr; Back</a>
    </div>
    <div id="product_container" class="product_container">
        <p class="p_update center">Loading...</p>
    </div>
</section>
<script>
(function () {
    const productId = new URLSearchParams(window.location.search).get('id')
    if (!productId) {
        document.getElementById('product_container').innerHTML =
            '<p class="p_update center">Product not found.</p>'
        return
    }

    const req = new Request()
    req.get('api.php?name=getImage&id=' + encodeURIComponent(productId), function (response) {
        const img = response.image
        const isOriginal = img.category === 'original'
        const price = parseFloat(img.price) > 0
            ? '&euro;' + parseFloat(img.price).toFixed(2)
            : 'Contact for price'

        document.title = img.title + ' | Daiga Paintings'

        const safeTitle = img.title.replace(/'/g, "\\'").replace(/"/g, '&quot;')
        const safeImg   = img.image.replace(/'/g, "\\'")

        document.getElementById('product_container').innerHTML = `
            <div class="product_layout">
                <div class="product_img_wrap">
                    <img src="./uploads/${img.image}" alt="${img.title}" class="product_img">
                </div>
                <div class="product_info">
                    <p class="product_category">${isOriginal ? 'Original Painting' : 'Canvas Print'}</p>
                    <h1 class="product_title">${img.title}</h1>
                    <p class="product_short_desc p_update">${img.short_description}</p>
                    <p class="product_price">${price}</p>
                    <p class="product_desc p_text">${img.description}</p>
                    <div class="product_actions">
                        <button class="btn_accent"
                            onclick="addToCart(${img.id}, '${safeTitle}', ${img.price}, '${safeImg}')">
                            ${isOriginal ? 'Add to Cart' : 'Order Print'}
                        </button>
                        <a href="contact.php" class="btn_nav" style="margin-left:1rem;">Enquire</a>
                    </div>
                </div>
            </div>
        `
    })
})()
</script>
<?php include 'includes/footer.php'; ?>
