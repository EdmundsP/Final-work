<?php

header('Content-type: application/json');

$output = ['status' => false];

if (empty($_FILES["fileToUpload"]["tmp_name"])) {
    $output['notice'] = 'No file received.';
    echo json_encode($output);
    exit;
}

$target_dir   = "uploads/";
$filename     = basename($_FILES["fileToUpload"]["name"]);
$target_file  = $target_dir . $filename;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

if ($_FILES["fileToUpload"]["size"] > 50000000) {
    $output['notice'] = 'File too large (max 50MB).';
    echo json_encode($output);
    exit;
}

if (!in_array($imageFileType, ['jpg', 'jpeg', 'png', 'gif', 'webp'])) {
    $output['notice'] = 'Only JPG, PNG, GIF and WebP files are allowed.';
    echo json_encode($output);
    exit;
}

if (file_exists($target_file)) {
    $name      = pathinfo($filename, PATHINFO_FILENAME);
    $ext       = pathinfo($filename, PATHINFO_EXTENSION);
    $filename  = $name . '_' . time() . '.' . $ext;
    $target_file = $target_dir . $filename;
}

$content = file_get_contents($_FILES["fileToUpload"]["tmp_name"]);
if ($content !== false && file_put_contents($target_file, $content) !== false) {
    $output['status']   = true;
    $output['filename'] = $filename;
    $output['notice']   = 'File uploaded successfully.';
} else {
    $output['notice'] = 'Upload failed. Check folder permissions.';
}

echo json_encode($output);
