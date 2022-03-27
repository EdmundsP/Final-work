<?php

define('PRIVATE_DIR', __DIR__ . '/../private/');
include PRIVATE_DIR . 'bootstrap.php';

use Database\Contact;
use Database\Subscribers;

header('Content-type: application/json');

$output = ['status' => false];

if (isset($_GET['name']) && is_string($_GET['name'])) {
    switch ($_GET['name']) {
        case 'subscribers':
            if (isset($_POST['email']) && is_string($_POST['email'])) {
                $subscribers = new Subscribers();
                $entity = ['email' => $_POST['email']];
                $entity = $subscribers->addEntity($entity);
                if(is_array($entity)) {
                    $output['status'] = true;
                    $output['entity'] = $entity;
                    $output['notice'] = 'New Entry added';
                }
                else{
                    $output['notice'] = 'There is an error!';
                    if(DEBUG_MODE){
                        $output['notice'] .= ' '. $subscribers->getError();
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
                    'name' => $_POST['name'],
                    'email' => $_POST['email'],
                    'message' => $_POST['message']
                ];

                $entity = $contact->addEntity($entity);
                if(is_array($entity)) {
                    $output['status'] = true;
                    $output['entity'] = $entity;
                    $output['notice'] = 'New Entry added';
                }
                else{
                    $output['notice'] = 'There is an error!';
                    if(DEBUG_MODE){
                        $output['notice'] .= ' '. $contact->getError();
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

       
        case 'delete':
            if (
                isset($_POST['id']) && is_string($_POST['id'])   
            ) {
                $id = (int) $_POST['id'];
                $contact = new Contact();
                if ($contact->delete($id)) {
                    $output['status'] = true;
                    $output['notice'] = "element $id deleted";
                }
                else{
                    $output['notice'] = "Deletion failed";
                }
                
            }
            break;
            case 'delete_subscriber':
                if (
                    isset($_POST['id']) && is_string($_POST['id'])   
                ) {
                    $id = (int) $_POST['id'];
                    $subscribers = new Subscribers();
                    if ($subscribers->delete($id)) {
                        $output['status'] = true;
                        $output['notice'] = "element $id deleted";
                    }
                    else{
                        $output['notice'] = "Deletion failed";
                    }          
                }
                break;
        }
    }
    


echo json_encode($output, JSON_PRETTY_PRINT);