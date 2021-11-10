package com.contoso.restservice.Service;

import org.springframework.stereotype.Component;

@Component
public class BookPackingService {
/*
    boolean canFit(List<Book> tiles, Board board) {
        if (tiles.isEmpty()) {
            return true;
        } else {
            for (Tile tile: tiles) {
                tiles.remove(tile);
                for (Position position: board.possiblePositionsFor(tile)) {
                    board.addTile(tile, position);
                    if (canFit(tiles, board))
                        return true;
                    board.removeTile(tile);
                }
                tiles.add(tile);
            }
            return false;
        }
    }
*/
}
