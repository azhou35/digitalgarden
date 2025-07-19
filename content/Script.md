$subscriptionId = "e3786699-5116-4dc9-82c6-a8aab043fb85"
$csvFile = "C:\Users\zhouannie\OneDrive - Microsoft\Documents\ResourceGroups-To-Delete.xlsx"
$csv = Import-Csv $csvFile
"C:\Users\zhouannie\ResourceGroups-To-Delete.xlsx"
Set-AzContext $subscriptionId
foreach ($row in $csv)
{
    Remove-AzResourceGroup -Name $row.NAME
}
$csvFile ="C:\Users\zhouannie\ResourceGroups-To-Delete.csv"

"C:\Users\zhouannie\OneDrive - Microsoft\Documents\ResourceGroups-To-Delete.xlsx"


$csvFile = "C:\Users\zhouannie\ResourceGroups-To-Delete.xlsx"

$subscriptionId = "e3786699-5116-4dc9-82c6-a8aab043fb85"
$csvFile = "C:\Users\zhouannie\ResourceGroups-To-Delete.csv"
$csv = Import-Csv $csvFile

Set-AzContext $subscriptionId
foreach ($row in $csv)
{
    Remove-AzResourceGroup -Name $row.NAME -Force
}