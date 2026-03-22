1. Области хранения данных.
   -база данных(js server)
   -BFF (backend for frontend)
   -redux store (state manager)

2. Сущности приложения
   -пользователь: данные будут храниться в БД(список пользователей), в BFF(сессия текщего пользователя), redux store(для отображения в браузере)
   -роль пользователя: БД(список ролей), BFF(сессия пользователя с ролью), redux store(использовать роль в браузере)
   -статья: БД(список статей), redux store(для отображения)
   -комментарий: БД(список комментариев), redux store(отображение на клиенте, в браузере)

3. Таблицы БД:
   -users: id / login / password / registered_at / role_id
   -roles : id / name
   -posts: id / title / image_url / content / published_at
   -comments: id / author_id / post_id / content

4. Схема состояния на BFF:
   -сессия текущего пользователя: login / password / role

5. Схема для redux store:
   -user: id / login / roleId
   -posts: array post: id / title / imageURL / pudlishedAt / commentsCount
   -post: id / title / imageURL / content / pudlishedAt / comments: array comment: id/ author / content / publishedAt
   -users: array user: id / login / registeredAt / role
