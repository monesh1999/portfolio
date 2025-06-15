let currentPage = 1;
    const contentX = document.getElementById('content-x');
    const contentY = document.getElementById('content-y');
    const contentZ = document.getElementById('content-z');
    const buttons = document.querySelectorAll('.buttons button');

    function showContent(tab) {
      // Remove active class
      buttons.forEach(btn => btn.classList.remove('active'));
      document.getElementById('btn-' + tab).classList.add('active');

      // Show selected content
      contentX.style.display = (tab === 'x') ? 'block' : 'none';
      contentY.style.display = (tab === 'y') ? 'block' : 'none';
      contentZ.style.display = (tab === 'z') ? 'block' : 'none';
    }

    function nextPage() {
      document.querySelector('.grid.page-1').style.display = 'none';
      document.querySelector('.grid.page-2').style.display = 'flex';
      document.getElementById('next-btn').style.display = 'none';
      document.getElementById('prev-btn').style.display = 'inline-block';
    }

    function prevPage() {
      document.querySelector('.grid.page-1').style.display = 'flex';
      document.querySelector('.grid.page-2').style.display = 'none';
      document.getElementById('next-btn').style.display = 'inline-block';
      document.getElementById('prev-btn').style.display = 'none';
    }

    window.onload = () => {
      showContent('x');
    };