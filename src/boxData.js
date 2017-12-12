export default {
    names: [
      'box-multiplier',
      'auto-box',
      'speed-box',
      'brutal-box'
    ],
    items: {
      'box-multiplier': {
        level: 0,
        prices: [50,500,2000, 4000, 8000,16000,32000,64000,128000,256000],
        values: ['1','1','1','1','1','1','1','1','1','1'],
        description: 'more boxes per clickses!'
      },
      'auto-box': {
        level: 0,
        prices: [5,30,60,200,1000, 5000, 8000, 16000,32000,64000],
        values: [1,1,1,1,1,1,1,1,1,1,1],
        description: 'automate your supply chain'
      },
      'speed-box': {
        level: 0,
        prices: [100, 400, 5000, 50000, 100000, 200000, 400000, 800000],
        values: [10, 20, 30, 50, 70, 90, 110, 130, 150, 170, 190],
        description: 'get! faster! box!'
      },
      'brutal-box': {
        level: 0,
        prices: [1000, 5000, 10000, 20000, 40000, 80000, 160000, 320000],
        values: [50, 60, 80, 100, 200, 300, 400, 500, 600, 700, 800],
        description: 'start with your serious'
      },

    }
}
