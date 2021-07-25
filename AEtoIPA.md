https://r12a.github.io/pickers/ipa/

### Rules - apply at a word level 

## Remove letters with silent annotation

a[x] -> '' 

## Identify Word Segments (Hypthen, Apostrophes and Seperators)

# break words into seperate segments for the next steps at '-', seperators and ''' (if not followed by 'r')

ab-cd -> ab-cd 
ab'd -> ab-d
ab'r -> abr
a[(c-f)]b -> a-b

## Parse critical digraphs (needed for common rules that reduce annotations)

## Distingush Vowel and Constant Groups. (needed for common rules that reduce annotations) Handling Semiconsonants.

ax[w]b -> awb
a[.w]b -> awb
ax[y]b -> ayb
a[.y]b -> ayb

## Distinguish Vowel Units (needed for common rules that reduce annotations)

no rules set results in each vowel letter having a sound (no digraphs)

## Place stresses for each vowel unit (needed for common rules that reduce annotations)

no rules will have stresses explicity annotated

## categorise Vowel Occurrences


## Evaluate Vowel Units //IGNORED RHOTIC STUFF

# schwa
x[!] -> IPA(ə)

# natural
a[0] -> IPA(eɪ)
e[0] -> IPA(iː)
i[0] -> IPA(aɪ)
o[0] -> IPA(oʊ)
u[0] -> IPA(uː)

# plain
a[1] -> IPA(æ)
e[1] -> IPA(ɛ)
i[1] -> IPA(ɪ)
o[1] -> IPA(ɑ)
u[1] -> IPA(ʌ)

# board
a[2] -> IPA(ɑː)
e[2] -> IPA(eɪ)
i[2] -> IPA(iː)
o[2] -> IPA(ɔː)
u[2] -> IPA(uː)

# clear
a[3] -> IPA(ʌ)
e[3] -> IPA(æ)
i[3] -> IPA(æ)
o[3] -> IPA(ʌ)
u[3] -> NotUsed

# central
a[4] -> IPA(ɛ)
e[4] -> IPA(ə)
i[4] -> IPA(ə)
o[4] -> IPA(ʌ)
u[4] -> IPA(ɛ)

# iotted
a[5] -> IPA(ɪ)
e[5] -> IPA(ɪ)
i[5] -> IPA(i)
o[5] -> IPA(ɪ)
u[5] -> IPA(ɪ)

# rounded
a[6] -> IPA(ɔː)
e[6] -> IPA(oʊ)
i[6] -> NotUsed
o[6] -> IPA(uː)
u[6] -> IPA(oʊ)

# opaque
a[7] -> IPA(ɔ)
e[7] -> IPA(ɔ)
i[7] -> IPA(ɔ)
o[7] -> IPA(ʊ)
u[7] -> IPA(ʊ)

# i-diphthong
a[8] -> IPA(aɪ)
e[8] -> IPA(aɪ)
i[8] -> NotUsed
o[8] -> IPA(waɪ)
u[8] -> IPA(jə)

# u-diphthong
a[9] -> IPA(aʊ)
e[9] -> IPA(ɔɪ)
i[9] -> NotUsed
o[9] -> IPA(aʊ)
u[9] -> IPA(jʊ)

## Distinguish Consonant Units in Groups //NOT SURE IF NEEDED WHEN FULL ANNOTATIONS IS IN USE

b -> IPA(b)

c -> IPA(k)
c[c] -> IPA(k)
c[v] -> IPA(s)
c[s] -> IPA(ʃ)
c[h] -> IPA(ʧ)

d -> IPA(d)
d[v] -> IPA(t)
d[h] -> IPA(ʤ)

f -> IPA(f)
f[v] -> IPA(v)

g -> IPA(g)
g[c] -> IPA(g)
g[S] -> IPA(ʒ)
g[H] -> IPA(ʤ)
g[v] -> IPA(k)

h -> IPA(h)
h[c] -> IPA(x)
h[v] -> IPA(h)

j -> IPA(ʤ)
j[c] -> IPA(h)
j[s] -> IPA(ʒ)
j[h] -> IPA(ʤ)

k -> IPA(k)

l -> IPA(l)
l[c] -> IPA(ɹ) (rhotic)
l[V] -> IPA(ɹ) (non-rhotic)

m -> IPA(m)

n -> IPA(n)
n[c] -> IPA(ŋ)
n[V] -> IPA(n)

p -> IPA(p)

q -> IPA(k)

r -> IPA(ɹ)
r[c] -> IPA(ɹ)

s -> IPA(s)
s[v] -> IPA(s)
s[s] -> IPA(ʃ)
s[V] -> IPA(z)
s[S] -> IPA(ʒ)

t -> IPA(t)
t[c] -> IPA(ɾ)
t[s] -> IPA(ʃ)
t[h] -> IPA(ʧ)
t[S] -> IPA(ʒ)

v -> IPA(v)
v[v] -> IPA(f)

w -> IPA(w)
w[c] -> IPA(w OR ʍ)
w[V] -> IPA(v)

x -> IPA(ks OR gz)
x[c] -> IPA(z)
x[v] -> IPA(ks)
x[s] -> IPA(kʃ)
x[V] -> IPA(gz)

y -> IPA(j)

z -> IPA(z)
z[c] -> IPA(ts)
z[v] -> IPA(s)
z[S] -> IPA(ʒ)
z[H] -> IPA(ʤ)

x[w] -> IPA(w)
x[y] -> IPA(j)

