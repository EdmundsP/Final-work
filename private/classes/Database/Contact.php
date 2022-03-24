<?php
namespace Database;

class Contact extends DB
{
    private $table_name = 'contact';
    public function getAll() {
        return $this->selectAll($this->table_name);
    }

    public function addEntity($entity) {
        return $this->insertEntity($entity, $this->table_name);
    }

    public function delete($id) {
        return $this->deleteEntityById($id, $this->table_name);


    }


}
