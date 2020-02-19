function calculateHeight(side) {
    return (Math.sqrt(3) * side) / 2;
}

function calculatePerimeter(side) {
    return side * 3;
}

function calculateArea(side, height) {
    return (side * height) / 2;
}

var $input = document.querySelector('input[name="side"]'),
    $perimeter = document.querySelector('span#perimeter'),
    $area = document.querySelector('span#area'),
    listener = function (event) {
        var side = $input.value,
            height = calculateHeight(side),
            perimeter = calculatePerimeter(side),
            area = calculateArea(side, height);

        $perimeter.innerHTML = perimeter.toFixed(2);
        $area.innerHTML = area.toFixed(2);
    };

$input.addEventListener('keyup', listener);
$input.addEventListener('change', listener);
