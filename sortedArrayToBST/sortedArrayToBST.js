// class TreeNode {
//     constructor(val, left = null, rigth = null) {
//         this.val = val
//         this.left = left
//         this.rigth = rigth
//     }
// }

// function sortedArrayToBST(array) {
//     if(!array.length) return null

//     const buildBST = (left, rigth) => {
//         if(left > rigth) return null

//         let mid = Math.floor((left + rigth) /2)
//         let root = new TreeNode(array[mid])
//         root.left = buildBST(left, mid - 1)
//         root.rigth = buildBST(mid + 1, rigth)

//         return root
//     } 

//     return buildBST(0, array.length - 1)
// }

// console.log(sortedArrayToBST([1,2,3,4,5,6,7]))

// class TreeNode {
//     constructor(val, left = null, rigth = null) {
//         this.val = val
//         this.left = left
//         this.rigth = rigth
//     }
// }

// function sortedArrayToBST(array) {
//     if(!array.length) return null

//     let mid = Math.floor(array.length / 2)
//     let root = new TreeNode(array[mid])
//     root.left = sortedArrayToBST(array.slice(0, mid))
//     root.rigth = sortedArrayToBST(array.slice(mid + 1))
//     return root
// }

// console.log(sortedArrayToBST([1,2,3,4,5,6]))

class TreeNode  {
    constructor(val, left = null, rigth = null) {
        this.val = val
        this.left = left
        this.rigth = rigth
    }
} 

const sortedArrayToBST2 = (array) => {
    if(!array.length) return null

    let mid = Math.floor(array.length  / 2)
    let root = new TreeNode(array[mid])
    root.left = sortedArrayToBST2(array.slice(0, mid))
    root.rigth = sortedArrayToBST2(array.slice(mid + 1))
    return root
}

console.log(sortedArrayToBST2([1,2,3,4,5,6]))