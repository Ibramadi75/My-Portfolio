<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    require 'config.php';
    session_start();

    function AskForPass()
    {
        echo '
        <form action="" method="post" enctype="multipart/form-data">
            entrez votre clé :
            <input type="text" name="pass" id="pass">
            <input type="submit">
        </form>
        ';
    }

    // $_SESSION['pass'] = $_POST['pass'];
    if(isset($_POST['pass'])){
        $passtry = $_POST['pass'];
        $passtryHashed = hash('sha256', $passtry);
    }
    if (!isset($passtry) || !$_SESSION['connected']){
        // echo '$_SESSION["connected"] : ' . $_SESSION["connected"];
        AskForPass();
    }else if($passtryHashed !== HASHED_PASS || !$_SESSION['connected']){
        AskForPass();
    }else{
        if ( $passtryHashed === HASHED_PASS || !$_SESSION['connected']) {
            !$_SESSION['connected'] = true;
            echo
            '<form action="" method="post" enctype="multipart/form-data">
                        <select name="pageSelected" id="pageSelected">
                        <option value="new">Créer une nouvelle page</option>';
            $dir = './uploads';
            $resp = scandir($dir);

            foreach ($resp as $file) {
                if (str_contains($file, '.md') or str_contains($file, '.html')) {
                    echo '<option value="' . $file . '">Remplacer ' . $file . '</option>';
                }
            }
            echo '
                        </select>
                        <input type="submit" value="Ok">
                    </form>';

            if (isset($_POST["pageSelected"])) {
                if ($_POST['pageSelected'] == "new") {
                    echo '
                                <form action="" method="post" enctype="multipart/form-data">
                                    Upload a File:
                                    <input type="text" name="fileName">
                                    <input type="file" name="the_file" id="fileToUpload">
                                    <input type="submit" name="submit_end" value="Start Upload New One">
                                </form>
                                ';
                } else {
                    echo '
                                <form action="" method="post" enctype="multipart/form-data">
                                    Upload a File:
                                    <input type="file" name="the_file" id="fileToUpload">
                                    <input type="submit" name="submit_end" value="Start Upload">
                                </form>
                            ';
                    $_SESSION['pageSelected'] = $_POST['pageSelected'];
                }
            }
            $currentDirectory = getcwd();
            $uploadDirectory = "/uploads/";

            $errors = []; // Store errors here

            $fileExtensionsAllowed = ['text/markdown', 'text/html']; // These will be the only file extensions allowed 

            if (isset($_POST['submit_end'])) {

                if ($_POST['submit_end'] == 'Start Upload New One') {
                    $fileName = $_POST['fileName'] . $_FILES['the_file']['type'];
                    $fileTmpName  = $_FILES['the_file']['tmp_name'];
                    $uploadPath = $currentDirectory . $uploadDirectory . $_POST['fileName'];
                } else {
                    $fileName = $_SESSION['pageSelected'];
                    $fileTmpName  = $_FILES['the_file']['tmp_name'];
                    $array = array(".md", ".html");
                    $fileName = str_ireplace($array, '', $fileName);
                    $uploadPath = $currentDirectory . $uploadDirectory . $fileName;
                }
                $fileSize = $_FILES['the_file']['size'];
                $fileType = $_FILES['the_file']['type'];
                // $fileExtension = strtolower(end(explode('.',$fileName)));
                $tmp = explode('.', $fileName);
                $fileExtension = end($tmp);



                if (!in_array($fileType, $fileExtensionsAllowed)) {
                    $errors[] = "This file extension is not allowed. Please upload a Markdown or HTML file";
                }

                if ($fileSize > 4000000) {
                    $errors[] = "File exceeds maximum size (4MB)";
                }


                if (empty($errors)) {
                    if ($fileType == $fileExtensionsAllowed[0]) {
                        $finalFileName = $uploadPath . '.md';
                    } else if ($fileType == $fileExtensionsAllowed[1]) {
                        $finalFileName = $uploadPath . '.html';
                    }

                    $didUpload = move_uploaded_file($fileTmpName, $finalFileName);

                    if ($didUpload) {
                        echo "The file " . basename($fileName) . " has been uploaded <br>
                            <a href=''>Uploader d'autres fichiers</a>";
                    } else {
                        echo "An error occurred. Please contact the administrator.";
                    }
                } else {
                    foreach ($errors as $error) {
                        echo $error . "These are the errors" . "\n";
                    }
                }
            }
        }
    }
    ?>
</body>

</html>