import Mock from 'mockjs'

Mock.mock('/api/user', 'get', {'list':[{'username':'admin1', 'sex': 3}]})

Mock.mock('/api/list', 'get', {'list':[{'username':'admin5', 'sex': 5}, {'username':'admin8', 'sex': 8}]})
