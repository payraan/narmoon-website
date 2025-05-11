const express = require('express');
const path = require('path');
const app = express();

// فایل‌های استاتیک را سرو کن
app.use(express.static(__dirname));

// برای هر مسیری، index.html را نشان بده
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});