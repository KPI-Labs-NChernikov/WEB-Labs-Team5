<?php
    $id = $_POST['id'];

    $xml = simplexml_load_file('tasks.xml');

    foreach($xml->tasks->task as $task)
    {
        if($task['id'] == $id) {
            $dom=dom_import_simplexml($task);
            $dom->parentNode->removeChild($dom);
        }
    }

    $xml->asXml('tasks.xml');

    echo json_encode(array("id"=>$id));
?>