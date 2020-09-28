function getName(node){
    return node["name"]
}

function headNode(list, collection){
    return collection[list]
}

function next(node, collection){
    return collection[node["next"]]
}

function nodeAt(idx, list, collection){
    let node = headNode(list, collection)
    for (let i = 0; i < idx; i++){
        node = next(node, collection)
    }
    return node
}

function addressAt(idx, list, collection){
    let node = headNode(list, collection)
    let address = list
    for (let i = 0; i < idx; i++){
        address = node["next"]
        node=next(node, collection)
    }
    return address
}

function indexAt(node, collection, list){
    let checknode = headNode(list, collection)
    for (let i = 0; i< 10000; i++){
        if(checknode === node){
            return i
        }
        else{
            checknode = next(checknode, collection)
        }
    }
}

function insertNodeAt(idx, location, list, collection){
    let prevNode = nodeAt(idx - 1, list, collection)
    let newNext = prevNode["next"]
    let newNode = collection[location]
    newNode["next"] = newNext
    prevNode["next"] = location
}

function deleteNodeAt(idx, list, collection){
    let node = nodeAt(idx, list, collection)
    let prevNode = nodeAt(idx - 1, list, collection)
    prevNode["next"] = node["next"]
}