let renderCountDict = {}
let perfDataDict = {}

export function register(tag) {
  if(!tag) {
    return
  }
  if(renderCountDict[tag]) {
    console.error('error! tag registered already')
  }
  renderCountDict[tag] = 1
}

export function unregister(tag) {
  if(!tag) {
    return
  }
  renderCountDict[tag] = null
}

export function update(tag) {
  if(!tag) {
    return
  }
  renderCountDict[tag] += 1
}

export function startPerf(key) {
  if(perfDataDict[key]) {
    console.error('error, duplicate key')
    return
  }
  perfDataDict[key] = Object.assign({}, renderCountDict)
}

export function stopPerf(key) {
  let startData = perfDataDict[key]
  if(!startData) {
    console.error('error, no start monitor')
    return
  }
  console.log(` monitor result ${key} begin-------------------------------------`)
  for(let comTag in startData) {
    if(!renderCountDict[comTag]) {
      console.log('  removed component tag:  ' + comTag)
    }
  }
  for(let comTag in renderCountDict) {
    let startCount = startData[comTag]
    let currentCount = renderCountDict[comTag]
    if(!startCount) {
      console.log('  add component tag:  ' + comTag)
    }else if(currentCount > startCount) {
      console.log('  diff count for tag ' + comTag + ' count ' + (currentCount - startCount))
    }else if(currentCount < startCount) {
      console.error('error')
    }
  }
  perfDataDict[key] = null
  console.log(`  monitor result ${key} end-------------------------------------`)
}