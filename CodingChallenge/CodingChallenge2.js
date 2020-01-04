var maxArea = function(height) {
    let i = 0
    let j = height.length - 1
    let max = 0
    let area 
    while(i<j){
        area = (j-i) * Math.min(height[i], height[j])
        max = Math.max(area, max)
        
        height[i] < height[j] ? i++: j--
    }
    return max };