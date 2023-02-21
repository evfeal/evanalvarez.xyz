import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/evfeal/evanalvarez.xyz.git', // Update to point to your repository
  user: {
   name: 'Evan Alvarez', // update to use your name
   email: 'evanalvarez@tutanota.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
