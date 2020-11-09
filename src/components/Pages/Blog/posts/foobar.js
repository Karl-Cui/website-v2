const foobar = {
    title: "My Experience with Google Foobar",
    title_short: "Google Foobar",
    id: "foobar",
    date: "Nov 9, 2020",
    content: `

![Foobar screen](/blog-posts/foobar/logo.png)

My friend sent a link to Google's Foobar challenge a small while back. I [first heard about it](https://medium.com/chingu/my-experience-with-the-google-foobar-challenge-and-tips-on-what-to-do-if-you-get-it-9848d31d3d20) about a year ago and have been wanting a crack at it for a long time now.

## What is the Foobar Challenge?

I've heard it being called "Google secret hiring challenge" or a "secret process". The exclusivity certainly makes it seem like a secret society that only the chosen (through their Google search history of course) can participate in.

__It's a coding challenge basically__, but a *really* cool one. 

I'll give a really brief rundown:
- You are a spy trying to thwart Commander Lambda's project LAMBCHOP
- There are 5 stages in ascending difficulty
- After the third stage, you can __submit your code and resume to Google's recruitment team__
- After the second and fourth stages, you get a __one-time referral link__
- Problems can be solved in Java or Python 2.7 :(
- There's a time limit for each problem, usually 1-2 weeks

The problems themselves are pretty interesting--they often require you to work out something logically first, then implement it in code. What I mean by this is, the harder problems do not necessarily need more code, but may need some more thought and problem-solving beforehand. Remember, Google is your friend!

![flavour text](/blog-posts/foobar/flavour_text.png)

## An adventure regarding using libraries

One of the questions was kinda troublesome.

Initially I thought I [couldn't use any third party libaries](https://stackoverflow.com/questions/43954548/google-foo-bar-challenge-issue-cant-import-libraries), such as [NumPy](https://numpy.org/), for linear algebra in Python. So, I ended up coding up infrastructure for matrix operations and a couple linear algebra algorithms *in pure Python*. That was not fun.

However, some of the hidden test cases kept failing. After debugging for a while to no avail, I decided to give the NumPy solution a try anyways.

It turns out that the Foobar challenge *allows* importing NumPy now (and possibly some other libraries, I haven't tried).

However, the problem now is that NumPy only dealt with matrices with \`int\` and \`float\` entires (primarily), and the problem required that I give fractions. Problem is, there may be [loss of precision](https://en.wikipedia.org/wiki/Loss_of_significance) due to catastrophic cancellation and the fact that \`floats\` are not infinitely precise.

Luckily, Python has a built-in fraction class with a [\`limit_denominator\` function](https://docs.python.org/3/library/fractions.html#fractions.Fraction.limit_denominator), that allows us to approximate fractions without the numerator and denominator blowing up due to loss of precision. After applying this, my solution finally passed all the test cases and was accepted.

This problem took me a lot longer than most of the others. However, I got a free linear algebra review out of it!

## Do I get anything for completing the challenge?

Probably not.

Again, lots of people call the Foobar Challenge "Google's secret hiring challenge". I don't want to sour the mood but realisitically, the chances of being hired from the Foobar Challenge are low. I have several friends who have done it before as well, several of which I believe would be highly qualified for positions at Google, but none of them have gotten responses.

The challenge itself is really fun though. The quirkiness of the prompts, the questions tying in the with the story in a humerous way, the cool Unix-like UI, and the interesting problems together really make for a great experience.

![example problem text](/blog-posts/foobar/problem_text.png)

## Can you give me a referral link?

Funnily enough, all my friends seem to either
- Be really busy and not feel up to the challenge, or
- Have already done the challenge

So have a referral link:
`
};

export default foobar;