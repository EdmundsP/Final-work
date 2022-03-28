<?php
namespace Database;

class AddImage extends DB
{

    private $table_name = 'images';

    public function get(int $id) {
        return $this->getById($id, $this->table_name);
    }
    public function getAll() {
        return $this->selectAll($this->table_name);
    }

    public function addEntity($entity) {
        return $this->insertEntity($entity, $this->table_name);
    }

    // public function addImage($entity) {
    //     return $this->insertEntity($entity, $this->table_name);
    // }

    public function delete($id) {
        return $this->deleteEntityById($id, $this->table_name);
    }



}
