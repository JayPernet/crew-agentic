# Template de Estrutura de Música

Esse arquivo trata-se de um exemplo, **apenas utilize este exemplo** para sua entrega final, apenas como **referência de estrutura**.

´´´
# {Artist-Name} - {Song-Title}

// Styles -> Max 1000 caracteres
<styles>

Exemplo **ilustrativo**:
J-Rock, 150 BPM, Dark, Intense, Aggressive, Emotional, Distorted Electric Guitar, Palm Muted Riffs, Melodic Lead Guitar, Driving Bass, Punchy Live Drums, Dynamic Builds, Breakdown Before Final Chorus, Male Vocals, Gritty Verse, Emotional Belt Chorus, Final Chorus Reprise: Massive Mixed Choir, Layered Harmonies, Octave Stack, Group Shout, Stadium Chant, Full Band Explosion, 432hz

Ou seja, uma única linha contendo todas as informações abaixo:
Voice: One Male/Female (voice description)
Genre: {list of music genres for this music}
Mood: {list for the mood of this music}
Instruments: {list of instruments for this music}
Vocals Style: {list for the vocals style of this music}
Tempo: {tempo for this music}
Key: {key for this music}
Turning: {frequency in hz for this music}
Time Signature: {time signature for this music}
Opcional: Instruções globais para seções específicas (ex: Final Chorus: Choir)

</styles>

// Music -> Max 5000 caracteres
<music>
[intro]
[Instruments: {list with description | optional dynamic description}]
[Vocals: {description}]
{optional lyrics}

[verse 1]
{lyrics}

[pre-chorus]
{lyrics}

[chorus]
{lyrics}

[verse 2]
{lyrics}

[pre-chorus]
{lyrics}

[chorus]
{lyrics}

[{instrument} solo] -> optional
[Instruments: {list with description | optional dynamic description}]

[scream / growl / guttural] -> optional
[Vocals: {optional description}]
{lyrics}

[bridge / breakdown]
[Instruments: {list with description | optional dynamic description}]
[Vocals: {description}]
{lyrics}

[Final Chorus | {Composite tags using '|'}]
{lyrics}

[Final Chorus Reprise] -> optional
{lyrics}

[outro]
{optional lyrics}
</music>
´´´

## Observações

O refrão é o mesmo durante toda a música. No máximo temos uma mudança no pré-refrão, completamente opcional.

Observe que a música possui uma estrutura visual: verso, pré-refrão, refrão, verso 2, pré-refrão etc... Não é "verso, verso, refrão" ou qualquer variação. A estrutura é quase hierarquica.

Atenção com o limite de caracteres para cada tag xml:
- Styles: Max 1000 caracteres
- Music: Max 5000 caracteres

### Melhores Práticas de Suno-Prompting

- **Tags Compostas**: Utilize o separador `|` para acumular instruções em uma única tag, como `[Final Chorus | Choir | Stacked Harmonies | Crowd-Style Vocals]`. Isso sinaliza uma mudança de textura vocal e intensidade.
- **Reprise**: Utilize `[Reprise]` ou `[Final Chorus Reprise]` para repetir a melodia anterior mantendo a energia elevada no clímax.
- O uso de tags "[Instruments: ...]" e "[Vocals: ...]" repetidamente em <music> é **em caso de mudança notória** de instrumentos ou vocais. Caso contrário, a tag `<styles>` já determina o som base de forma global (na música inteira).
- **Sintaxe**: Note que não há uso de "()" e sim "[]" nas tags de estrutura. Suno aceita o uso de "|" para combinar descrições.

### Exemplos de Solos:
- [guitar solo]
- [violin solo]
- [bass solo]
- [drums solo]

## Duração da música

Por observações feitas durante o uso do Suno, a duração da música é determinada pela quantidade de linhas e tamanho de cada linha que cada seção possui. Não é possível determinar a duração da música, porém é possível estimar a duração da música pela quantidade de linhas que cada seção possui. A duração máxima de uma música gerada pelo Suno é de 8:59 minutos. Não chega aos 9 minutos.
