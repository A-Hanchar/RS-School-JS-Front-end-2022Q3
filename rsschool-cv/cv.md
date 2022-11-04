# Artsiom Hanchar
![Artsiom Hanchar](./Artsiom-Hanchar.jpg)

## Contacts:
* [Discord](https://discordapp.com/users/962477520794562610/)
* [LinkedIn](https://www.linkedin.com/in/artsiom-hanchar/)
* [Telegram](https://t.me/AHanchar)
* [Instagram](https://www.instagram.com/tema_igorevich/)
* **Email:** artsiom.hanchar@gmail.com

## About
Associate Software Engineer at Exadel

## Skills
**Technologies:**
* HTML5/CSS3/PostCSS
* JS
* React/Redux
* Jest/Enzyme/RTL
* Scrum

**Software and Tools:**
* VS Code
* GitHub
* Jira
## Code Example
**Roman to Integer**
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.<br>

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

_For example_, **2** is written as **II** in Roman numeral, just two ones added together. **12** is written as **XII**, which is simply **X + II**. The number **27** is written as **XXVII**, which is **XX + V + II**.<br>

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:<br>
* **I** can be placed before **V** (5) and **X** (10) to make 4 and 9. 
* **X** can be placed before **L** (50) and **C** (100) to make 40 and 90. 
* **C** can be placed before **D** (500) and **M** (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.<br>
**The Solution Of The Problem**
```
/**
 * @see https://leetcode.com/problems/roman-to-integer/
 * @param {string} romanString
 */
const romanToInteger = romanString => {
  const reverse = romanString.split('').reverse().join('')

  const arabValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  const canSubtraction = ['I', 'X', 'C', 'M']

  let countLetters = reverse.length

  let index = 0
  let result = 0

  while (index < countLetters) {
    const current = reverse[index]
    const next = reverse[index + 1]

    result += arabValues[current]

    if (arabValues[current] > arabValues[next] && canSubtraction.includes(next)) {
      result -= arabValues[next]

      index += 2
      continue
    }

    index++
  }

  return result
}
```
## Expiriense
### Associate Software Engineer
_Jun 2021 - Present_<br>

Active learning of modern front-end technologies<br>
Work as developer for different projects<br>

<br>

**Technology stack:**
* HTML
* CSS
* JavaScript
* TypeScript
* React
* Redux
* Enzyme
* Jest
* RTL

<br>

**Software and Tools:**
* VS Code
* GitHub
* Jira

## Education
### Gomel'ski Dzjaržauny Universitet imja Franciska Skarany
Diploma of Education<br>
Applied Mathematics<br>

_Sep 2013 - Jun 2017_<br>

**Activities and societies:** Playing for the faculty and university volleyball team
## Languages
* **English:** B1
* **Russian:** Native