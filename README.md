# API-tasks

### Клонируйте репозиторий
``` bash
git clone https://github.com/Azamat-Giztdinov/API-tasks.git
```

### Перейдите в директорию проекта
``` bash
cd API-tasks
```
### Установите зависимости
``` bash
npm install
```

### Создайте файл .env и добавьте параметры подключения к базе данных
``` bash
cp .env.example .env
```

### Запустите проект
``` bash
npm start
```

## Примеры запросов к API

### Создать новую задачу
```
POST /tasks
{
  "title": "task 1",
  "description": "Task description",
  "status": "выполняется"
}
```

### Получить список всех задач
```
GET /tasks
```

### Получить задачу по ID

```
GET /tasks/1
```

### Обновить задачу по ID

```
PUT /tasks/1
{
  "title": "Ubdate task",
  "description": "Updated description",
  "status": "выполнено"
}
```

### Удалить задачу по ID
```
DELETE /tasks/1
```