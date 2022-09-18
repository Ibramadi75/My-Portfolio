<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="subPages.css">
</head>
<body>
    <div id="subPages">
    <?php
        require './parsedown-1.7.4/Parsedown.php';

        $Parsedown = new Parsedown();

        $dir = './ibradministrationPrivate/uploads';
        $resp = scandir($dir);

        echo '<form action"" method="GET">';
        echo '
            <div class="select">
            
            <select name="fileToRead">
        ';
        foreach ($resp as $file) {
            if (str_contains($file, '.md') or str_contains($file, '.html')) {
                if($_GET['fileToRead'] == $file) {
                    echo '<option value="' . $file .'" selected>Remplacer ' . $file . '</option>';
                }else{
                    echo '<option value="' . $file .'">Remplacer ' . $file . '</option>';
                }
            }
        }
        echo '
            </select>
            </div>
        ';

        echo '
        <input type="submit" value="Consulter">
        </form>';
        echo '<p>';
        $mdContent = '';
        if (isset($_GET['fileToRead'])){
            echo '<div id="veilleContent">';
            $path = $dir . '/' . $_GET['fileToRead'];
            foreach (file($path) as $line){
                $mdContent .= $line;
            };
            echo $Parsedown->text($mdContent);
            echo '</div>';
            ;
        }
        echo '</p>';
    ?>
    </div>
</body>
</html>