<?php

define('PRIVATE_DIR', __DIR__ . '/../private/');
include PRIVATE_DIR . 'bootstrap.php';

use Database\AddImage;
use Database\Contact;
use Database\Subscribers;

header('Content-type: application/json');

$output = ['status' => false];

if (isset($_GET['name']) && is_string($_GET['name'])) {
    switch ($_GET['name']) {

        case 'subscribers':
            if (isset($_POST['email']) && is_string($_POST['email'])) {
                $subscribers = new Subscribers();
                $entity = ['email' => filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL)];
                $entity = $subscribers->addEntity($entity);
                if (is_array($entity)) {
                    $output['status'] = true;
                    $output['entity'] = $entity;
                    $output['notice'] = 'Subscribed successfully!';
                } else {
                    $output['notice'] = 'There is an error!';
                    if (DEBUG_MODE) {
                        $output['notice'] .= ' ' . $subscribers->getError();
                    }
                }
            }
            break;

        case 'contact':
            if (
                isset($_POST['name']) && is_string($_POST['name']) &&
                isset($_POST['email']) && is_string($_POST['email']) &&
                isset($_POST['message']) && is_string($_POST['message'])
            ) {
                $contact = new Contact();
                $entity = [
                    'name'    => strip_tags(trim($_POST['name'])),
                    'email'   => filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL),
                    'message' => strip_tags(trim($_POST['message']))
                ];
                $entity = $contact->addEntity($entity);
                if (is_array($entity)) {
                    $output['status'] = true;
                    $output['entity'] = $entity;
                    $output['notice'] = 'Message sent!';

                    $to      = ARTIST_EMAIL;
                    $subject = 'New contact message from ' . $entity['name'];
                    $body    = "Name: {$entity['name']}\nEmail: {$entity['email']}\n\nMessage:\n{$entity['message']}";
                    $headers = "From: noreply@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\n";
                    $headers .= "Reply-To: {$entity['email']}\r\n";
                    @mail($to, $subject, $body, $headers);
                } else {
                    $output['notice'] = 'There is an error!';
                    if (DEBUG_MODE) {
                        $output['notice'] .= ' ' . $contact->getError();
                    }
                }
            }
            break;

        case 'ImageData':
            if (
                isset($_POST['image']) && is_string($_POST['image']) &&
                isset($_POST['title']) && is_string($_POST['title']) &&
                isset($_POST['short_description']) && is_string($_POST['short_description']) &&
                isset($_POST['description']) && is_string($_POST['description']) &&
                isset($_POST['category']) && in_array($_POST['category'], ['original', 'print']) &&
                isset($_POST['price'])
            ) {
                $addImage = new AddImage();
                $entity = [
                    'image'             => basename(trim($_POST['image'])),
                    'title'             => strip_tags(trim($_POST['title'])),
                    'short_description' => strip_tags(trim($_POST['short_description'])),
                    'description'       => strip_tags(trim($_POST['description'])),
                    'category'          => $_POST['category'],
                    'price'             => number_format((float) $_POST['price'], 2, '.', '')
                ];
                $entity = $addImage->addEntity($entity);
                if (is_array($entity)) {
                    $output['status'] = true;
                    $output['entity'] = $entity;
                    $output['notice'] = 'Image added!';
                } else {
                    $output['notice'] = 'There is an error!';
                    if (DEBUG_MODE) {
                        $output['notice'] .= ' ' . $addImage->getError();
                    }
                }
            }
            break;

        case 'getSubscribers':
            $output['status'] = true;
            $subscribers = new Subscribers();
            $output['subscribers'] = $subscribers->getAll();
            break;

        case 'getContact':
            $output['status'] = true;
            $contact = new Contact();
            $output['contact'] = $contact->getAll();
            break;

        case 'getImages':
            $output['status'] = true;
            $addImage = new AddImage();
            if (isset($_GET['category']) && in_array($_GET['category'], ['original', 'print'])) {
                $output['addImage'] = $addImage->getByCategory($_GET['category']);
            } else {
                $output['addImage'] = $addImage->getAll();
            }
            break;

        case 'getImage':
            if (isset($_GET['id'])) {
                $id = (int) $_GET['id'];
                $addImage = new AddImage();
                $image = $addImage->get($id);
                if ($image) {
                    $output['status'] = true;
                    $output['image'] = $image;
                } else {
                    $output['notice'] = 'Image not found';
                }
            }
            break;

        case 'delete':
            if (isset($_POST['id']) && is_string($_POST['id'])) {
                $id = (int) $_POST['id'];
                $contact = new Contact();
                if ($contact->delete($id)) {
                    $output['status'] = true;
                    $output['notice'] = "Contact $id deleted";
                } else {
                    $output['notice'] = 'Deletion failed';
                }
            }
            break;

        case 'delete_subscriber':
            if (isset($_POST['id']) && is_string($_POST['id'])) {
                $id = (int) $_POST['id'];
                $subscribers = new Subscribers();
                if ($subscribers->delete($id)) {
                    $output['status'] = true;
                    $output['notice'] = "Subscriber $id deleted";
                } else {
                    $output['notice'] = 'Deletion failed';
                }
            }
            break;

        case 'delete_image':
            if (isset($_POST['id']) && is_string($_POST['id'])) {
                $id = (int) $_POST['id'];
                $addImage = new AddImage();
                $image = $addImage->get($id);
                if ($image && $addImage->delete($id)) {
                    $addImage->deleteFile($image['image']);
                    $output['status'] = true;
                    $output['notice'] = "Image $id deleted";
                } else {
                    $output['notice'] = 'Deletion failed';
                }
            }
            break;
    }
}

echo json_encode($output, JSON_PRETTY_PRINT);
