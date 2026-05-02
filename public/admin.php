<?php
$page_title = 'Admin | Daiga Paintings';
$page_description = '';
include 'includes/head.php';
include 'includes/nav.php';
?>
<section>
    <div class="center">
        <h2>Add new image</h2>
    </div>
    <div class="center__no_mr">
        <div class="input_cont">
            <form action="Uploads.php" method="post" enctype="multipart/form-data">
                <label class="input_lable">Upload image file</label>
                <input id="fileToUpload" type="file" name="fileToUpload" accept="image/*">
                <span class="center_simpel">
                    <img class="img_prewiev__sm" id="upload_preview" src="" alt="" style="max-width:200px; display:none;">
                </span>
                <span class="center_simpel">
                    <button type="submit" class="btn_accent send">upload</button>
                </span>
            </form>

            <form id="img_data" action="api.php?name=ImageData" method="post">
                <div>
                    <label class="input_lable" for="image">image filename</label>
                    <input class="input_area" type="text" id="image" name="image" placeholder="Filled automatically after upload">
                </div>
                <div>
                    <label class="input_lable" for="image_title">title</label>
                    <input class="input_area" type="text" id="image_title" name="title" placeholder="Painting title" required>
                </div>
                <div>
                    <label class="input_lable" for="image_category">category</label>
                    <select class="input_area" id="image_category" name="category">
                        <option value="original">Original Painting</option>
                        <option value="print">Print</option>
                    </select>
                </div>
                <div>
                    <label class="input_lable" for="image_price">price (€)</label>
                    <input class="input_area" type="number" id="image_price" name="price" placeholder="0.00" step="0.01" min="0" value="0">
                </div>
                <div>
                    <label class="input_lable" for="image_short_description">short description</label>
                    <input class="input_area" type="text" id="image_short_description" name="short_description" placeholder="Size and technique (e.g. 40×50cm, acrylic)">
                </div>
                <div>
                    <label class="input_lable" for="image_description">full description</label>
                    <textarea class="input_message" name="description" rows="6" id="image_description" placeholder="Tell us about the painting"></textarea>
                </div>
                <div class="center_simpel">
                    <button type="submit" class="btn_accent send">add image</button>
                </div>
            </form>
        </div>
    </div>
    <hr>
    <div class="center__no_mr">
        <table id="image_list">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Preview</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Short description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    <hr>
</section>

<section>
    <div class="center__no_mr">
        <h2>Messages from clients</h2>
    </div>
    <div class="center__no_mr">
        <table id="contact_list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th></th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    <hr>
    <div class="center__no_mr">
        <h2>Subscribers</h2>
    </div>
    <div class="center__no_mr">
        <table id="subscribe_list">
            <thead>
                <tr>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</section>
<?php include 'includes/footer.php'; ?>
