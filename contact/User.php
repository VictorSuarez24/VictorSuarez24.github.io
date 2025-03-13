<?php
class User {
    protected $username;
    protected $email;

    public function __construct($username, $email) {
        $this->username = $username;
        $this->email = $email;
    }

    public function showme() {
        return "Usuario: $this->username, Email: $this->email";
    }
}
?>