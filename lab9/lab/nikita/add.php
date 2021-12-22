<?php
    $name = $_POST['name'];
    $description = isset($_POST['description']) ? $_POST['description'] : null;
    $time = $_POST['time'];

    if (file_exists('tasks.xml')) {
        $xml = simplexml_load_file('tasks.xml');
    } else {
        $dom = new DOMDocument('1.0','UTF-8');
        $dom->formatOutput = true;

        $root = $dom->createElement('root');
        $dom->appendChild($root);

        $tasksElement = $dom->createElement('tasks');
        $root->appendChild($tasksElement);

        $lastId = $dom->createElement('last_id', 0);
        $root->appendChild($lastId);

        $xml = simplexml_import_dom($dom);
    }

    $task = $xml->tasks->addChild('task');

    $id = $xml->last_id + 1;

    $xml->last_id = $id;

    $tasks = $xml->tasks->children();

    $task->addAttribute('id', $id);

    $taskName = $task->addChild('name', $name);

    if ($description != null)
        $taskDescription = $task->addChild('description', $description);

    $taskTime = $task->addChild('time', $time);

    $xml->asXml('tasks.xml');

    echo json_encode(array("id"=>$id, "name"=>$name, "description"=>$description, "time"=>$time));
?>