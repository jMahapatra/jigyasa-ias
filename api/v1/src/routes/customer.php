<?php
$app->post('/customer/add', function($request, $response){
    $code = strtoupper(uniqid('cus'));
    $name = $request->getParam('name');
    $mobile = $request->getParam('mobile');
    $date = date('Y-m-d');

    try {

        $query = $this->db->prepare("INSERT INTO `customers` (`id`, `name`,`mobile`, `date`)
                                    VALUES (:code, :name, :mobile, :date)");
        $query->execute(array(
            'code'      => $code,
            'name'      => $name,
            'mobile'    => $mobile,
            'date'      => $date,
        ));

        echo json_encode(array(
            "status" => "success"
        ));

    } catch (PDOException $e){
        echo json_encode(array(
            "error" => array("text" => $e->getMessage())
        ));
    }
});

$app->get('/customer/list', function($request, $response){

    try {
        
        $query = $this->db->prepare("SELECT * FROM `customers`");
        $query->execute();

        $customers = $query->fetchAll(PDO::FETCH_OBJ);

        echo json_encode($customers);

    } catch (PDOException $e){
        echo json_encode(array(
            "error" => array("text" => $e->getMessage())
        ));
    }
});

$app->get('/customer/detail/{code}', function($request, $response){
    $code = $request->getAttribute('code');
    
    try {
        
        $query = $this->db->prepare("SELECT * FROM `customers` WHERE `id` = :code");
        $query->execute(array(
            'code'  => $code
        ));

        $customer = $query->fetch(PDO::FETCH_OBJ);

        echo json_encode($customer);

    } catch (PDOException $e){
        echo json_encode(array(
            "error" => array("text" => $e->getMessage())
        ));
    }
});


$app->delete('/customer/delete/{code}', function($request, $response){
    $code = $request->getAttribute('code');
    try {

        $result = $this->db->prepare("DELETE FROM `customers` WHERE `id` = :code");
        $result->execute(array(
            'code'  => $code
        ));

        echo json_encode(array(
            "status" => "success"
        ));
    } catch (PDOException $e){
        echo json_encode(array(
            "error" => array("text" => $e->getMessage())
        ));
    }
});


$app->put('/customer/update/{code}', function($request, $response){
    $code = $request->getAttribute('code');
    try {

        $result = $this->db->prepare("UPDATE `customers` SET 
                                        `name` = :name,
                                        `mobile` = :mobile 
                                        WHERE `id` = :code");
        $result->execute(array(
            'name'      => $request->getParam('name'),
            'mobile'    => $request->getParam('mobile'),
            'code'      => $code
        ));

        echo json_encode(array(
            "status" => "success"
        ));
    } catch (PDOException $e){
        echo json_encode(array(
            "error" => array("text" => $e->getMessage())
        ));
    }
});