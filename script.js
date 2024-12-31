const snowflakeContainer = document.querySelector('.snowflake-container');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * 100 + '%';
  snowflake.style.animationDuration = Math.random() * 10 + 5 + 's'; // Разная скорость падения
  snowflake.textContent = '*';
  snowflakeContainer.appendChild(snowflake);
}

setInterval(createSnowflake, 100); // Создаем снежинки с интервалом 100 мс
