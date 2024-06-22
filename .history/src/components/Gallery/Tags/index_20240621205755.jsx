import { TagTitulo, TagsContainer, Div } from './styles';
import tags from './tags.json'

export function Tags() {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.titulo}</Tag>
        ))}
      </Div>
    </TagsContainer>
  );
}
