<?php

$path = 'ibradministrationPrivate/uploads';
$folder = scandir('ibradministrationPrivate/uploads');

/* Sometimes the folder contain files named '.' and '..', if it happen uncomment this :*/
for ($i = 0; $i < count($folder); $i++) {
    if ($folder[$i] == '.' || $folder[$i] == '..') {
        unset($folder[$i]);
    }
}
$superFile = 'monJson.json';

$x = [''];
$i = 0;
foreach ($folder as $file) {
    if ((str_contains($file, '.md') or str_contains($file, '.html'))) {
        $editFile=fopen("monJson.json","w");
        $extra=array();
        $extra = array(
            'id'                =>      $i,
            'name'               =>     $file,
            'lastModif'          =>     date("d/m/Y à H\hi", filemtime($path . '/' . $file))
        );
        $array_data[] = $extra;
        $final_data = json_encode($array_data);
        file_put_contents($superFile, $final_data);
        fclose($editFile);
    }
    $i++;
}
