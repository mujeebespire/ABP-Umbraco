<?php
$dir = __DIR__;
$files = array_filter(scandir($dir), function($file) {
  return pathinfo($file, PATHINFO_EXTENSION) === 'html';
});
header('Content-Type: application/json');
echo json_encode(array_values($files));