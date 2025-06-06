import './LoginPage.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './AuthContext';
import { useHistory } from 'react-router-dom';



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // User data sara idhar
    // Dummy User Data
    const userData = {
            id: Math.floor(Math.random() * 1000000), // Generate unique ID
            username: username,
            userPf: 'https://i.scdn.co/image/ab67616d0000b273a4bfc54c8138f534e4ec6d3e',
            country: 'India',
            region: 'Rajasthan',
            city: 'Jaipur',
            institute: 'IIT Guwahati',
            linkedin: 'aditya26675',
            handles: {
              github: 'yagvalakya1975',
              codeforces: 'adi_tyaa_26',
              atcoder: '',
              leetcode: ''},
            bookmarked:[{
                    Name: 'Divisible Pairs',
                    QID: 'cf1931d',
                    Platform: 'Codeforces',
                    Content: 'Polycarp has two favorite integers 𝑥 and 𝑦 (they can be equal), and he has found an array 𝑎 of length 𝑛. \n Polycarp considers a pair of indices ⟨𝑖,𝑗⟩ (1≤𝑖<𝑗≤𝑛 ) beautiful if: 𝑎𝑖+𝑎𝑗 is divisible by 𝑥 ; 𝑎𝑖−𝑎𝑗 is divisible by 𝑦 . For example, if 𝑥=5 , 𝑦=2 , 𝑛=6 , 𝑎= [1,2,7,4,9,6 ], then the only beautiful pairs are: ⟨1,5⟩ : 𝑎1+𝑎5=1+9=10 (10 is divisible by 5 ) and 𝑎1−𝑎5=1−9=−8 (−8 is divisible by 2 ); ⟨4,6⟩ : 𝑎4+𝑎6=4+6=10 (10 is divisible by 5 ) and 𝑎4−𝑎6=4−6=−2 (−2 is divisible by 2 ). Find the number of beautiful pairs in the array 𝑎 .',
                    DateAdded: "December 17, 1995 03:24:00",
                    Difficulty: 9,
                    Tags : ['combinatorics', 'math', 'number theory']
                },
                {
                    Name: 'GCD Pair Counting',
                    QID: 'cf1493d',
                    Platform: 'Codeforces',
                    Content: 'Given an array of integers, count the number of pairs (i, j) where i < j and the GCD of the pair is exactly k. Example: For array [4, 6, 8, 10] and k=2, the pairs are (4,6), (4,8), (4,10), (6,8), (6,10), (8,10).',
                    DateAdded: "June 15, 2021 10:00:00",
                    Difficulty: 7,
                    Tags: ['gcd', 'number theory', 'combinatorics']
                },
                {
                    Name: 'Modular Pairs',
                    QID: 'abc186e',
                    Platform: 'AtCoder',
                    Content: 'Given an array, find the number of pairs (i, j) where (a[i] * a[j]) mod m = 0. Example: For array [2, 3, 4, 6] and m=6, valid pairs are (2,3), (2,6), (3,4), (4,6).',
                    DateAdded: "January 2, 2021 12:00:00",
                    Difficulty: 8,
                    Tags: ['modular arithmetic', 'number theory']
                },
                {
                    Name: 'Prime Pair Sum',
                    QID: 'lc2048',
                    Platform: 'LeetCode',
                    Content: 'Count the number of pairs (i, j) where i < j and a[i] + a[j] is a prime number. Example: For array [1, 2, 3, 4], valid pairs are (1,2), (1,4), (2,3).',
                    DateAdded: "November 5, 2022 09:30:00",
                    Difficulty: 6,
                    Tags: ['primes', 'combinatorics']
                },
                {
                    Name: 'Subsequence Divisibility',
                    QID: 'cf1593f',
                    Platform: 'Codeforces',
                    Content: 'Given an array, count the number of non-empty subsequences where the sum of elements is divisible by k. Example: For array [1, 2, 3] and k=3, valid subsequences are [3], [1,2].',
                    DateAdded: "October 10, 2021 15:45:00",
                    Difficulty: 9,
                    Tags: ['dynamic programming', 'divisibility']}]
        };
    
    login(userData);
    history.push(`/profile/${userData.id}`);
  };

  return (
    <div className="login-page">
      <div className="login-container">
          <Navbar transparent={true} />
        
        <div className="background-image-container" />
        
        <div className="form-container" >
          <h1>Welcome to Zcoder</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Login</button>
            <Link to='/profile/new' className="signup-button">
              <button type="button">Sign up</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;