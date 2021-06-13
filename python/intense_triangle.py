import random
import re
import timeit

COLOR = {
'RR': 'R',
'GG': 'G',
'BB': 'B',
'BG': 'R',
'GB': 'R',
'BR': 'G',
'RB': 'G',
'GR': 'B',
'RG': 'B',
}

def triangle(row):

    if len(row) == 1:
        return row

    if len(row) == 2:
        return COLOR[row]

    colors = []
    for i in range(len(row) - 1):
        color = COLOR[row[i] + row[i + 1]]
        if colors:
            for index in range(len(colors)):
                if index == 0:
                    colors[index] = (colors[index] + color)[-2:]
                else:
                    colors[index] = (colors[index] + COLOR[colors[index - 1]])[-2:]

            colors.append(COLOR[colors[-1]])
        else:
            colors.append(color)

    return colors[-1]

CACHE = {}
def triangle_v2(row):
    if row in CACHE:
        return CACHE[row]

    if len(row) == 1:
        return row

    if len(row) == 2:
        return COLOR[row]

    buffer_size = 0
    while len(row) > 1:
        buffer_size = max(min(len(row)-1, 8), 2)
        iteration = 1
        colors = ''
        for index in range(len(row) - buffer_size + 1):
            iteration += 1
            colors += triangle_v2(row[index:index + buffer_size])

        if len(colors) == 1:
            CACHE[row] = colors

        row = colors

    return colors

def update(colors, update_color, start_index):
    print('update')
    for i in range(len(update_color)):
        colors[start_index] = update_color[i]
        start_index += 1


def update_cache(colors):
    original_color = colors[0][1]
    key = original_color
    for i, color in enumerate(colors):
        key = key + color[0]
        value = [c[-1] for c in colors[0:i+1]]
        CACHE[key] = value

setup = '''
import random
row = ''.join(random.choices('RBG', k=1000))
'''

stmt = '''
triangle(row)
'''

print(timeit.timeit(stmt=stmt, setup=setup, number=1, globals=globals()))
