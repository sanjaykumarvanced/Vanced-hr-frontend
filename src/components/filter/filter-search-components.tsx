import { Box, Button } from '@mui/material';
import { SearchInput } from '../input/search-input';

export const FilterSearchComponents = ({
  searchTitle,
  Component,
  isEmpty,
  hideDate = false,
}: {
  searchTitle: string;
  Component?: () => JSX.Element;
  isEmpty: boolean;
  hideDate?: boolean;
}) => {
  return (
    <Box
      sx={{
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
      }}
    >
      {!isEmpty && (
        <Button
          size="small"
          sx={{ position: 'relative', marginRight: '20px' }}
        >
          Clear Filters
        </Button>
      )}

      <Box
        sx={{
          maxWidth: 173,
          marginRight: '13px',
        }}
      >
        <SearchInput size="small" variant="filled" placeholder={searchTitle} />
      </Box>

      {Component && <Component />}
    </Box>
  );
};
